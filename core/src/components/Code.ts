import Rete from 'rete'

import {
  NodeData,
  ThothNode,
  ThothWorkerInputs,
  ThothWorkerOutputs,
} from '../../types'
import { CodeControl } from '../dataControls/CodeControl'
// @seang todo: convert data controls to typescript to remove this
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { InputControl } from '../dataControls/InputControl'
import { SocketGeneratorControl } from '../dataControls/SocketGenerator'
import { EngineContext } from '../engine'
import { triggerSocket } from '../sockets'
import { ThothComponent } from '../thoth-component'

const defaultCode = `
// inputs: dictionary of inputs based on socket names
// data: internal data of the node to read or write to nodes data state
function worker(inputs, data) {

  // Keys of the object returned must match the names 
  // of your outputs you defined.
  return {}
}
`

const info = `The code component is your swiss army knife when other components won't cut it.  You can define any number of inputs and outputs on it, and then write a custom worker function.  You have access to the data plugged into the inputs you created on your component, and can send data out along your outputs.

Please note that the return of your function must be an object whose keys are the same value as the names given to your output sockets.  The incoming inputs argument is an object whose keys are the names you defined, and each is an array.
`
export class Code extends ThothComponent<unknown> {
  constructor() {
    // Name of the component
    super('Code')

    this.task = {
      outputs: {
        trigger: 'option',
      },
    }
    this.category = 'Logic'
    this.info = info
    this.display = true
  }

  builder(node: ThothNode): ThothNode {
    if (!node.data.code) node.data.code = defaultCode

    const outputGenerator = new SocketGeneratorControl({
      connectionType: 'output',
      ignored: ['trigger'],
      name: 'Output Sockets',
    })

    const inputGenerator = new SocketGeneratorControl({
      connectionType: 'input',
      ignored: ['trigger'],
      name: 'Input Sockets',
    })

    const codeControl = new CodeControl({
      dataKey: 'code',
      name: 'Code',
    })

    const nameControl = new InputControl({
      dataKey: 'name',
      name: 'Component Name',
    })

    node.inspector
      .add(nameControl)
      .add(inputGenerator)
      .add(outputGenerator)
      .add(codeControl)

    const dataInput = new Rete.Input('trigger', 'Trigger', triggerSocket, true)
    const dataOutput = new Rete.Output('trigger', 'Trigger', triggerSocket)

    return node.addOutput(dataOutput).addInput(dataInput)
  }

  // the worker contains the main business logic of the node.  It will pass those results
  // to the outputs to be consumed by any connected components
  worker(
    node: NodeData,
    inputs: ThothWorkerInputs,
    outputs: ThothWorkerOutputs,
    {
      silent,
      data,
      thoth,
    }: { silent: boolean; thoth: EngineContext; data: { code: unknown } }
  ) {
    const { processCode } = thoth
    if (!processCode) return

    try {
      // const value = runCodeWithArguments(node.data.code)
      const value = processCode(node.data.code, inputs, data)

      if (!silent) node.display(`${JSON.stringify(value)}`)

      return value
    } catch (err) {
      console.log(err)
      if (!silent)
        node.display(
          'Error evaluating code.  Open your browser console for more information.'
        )
      console.log({ node })
      throw new Error(
        `'${err.message}' in ${node.name} component with name "${node.data.name}"`
      )
      // close the data socket so it doesnt error out
      // this._task.closed = ['data']
    }
  }
}
