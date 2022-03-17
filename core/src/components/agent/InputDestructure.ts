import Rete from 'rete'
import { v4 as uuidv4 } from 'uuid'

import { NodeData, ThothNode, ThothWorkerInputs } from '../../../types'
import { Task } from '../../plugins/taskPlugin/task'
import { anySocket, stringSocket, triggerSocket } from '../../sockets'
import { ThothComponent, ThothTask } from '../../thoth-component'

const info = `The input component allows you to pass a single value to your chain.  You can set a default value to fall back to if no value is provided at runtime.  You can also turn the input on to receive data from the playtest input.`

type InputReturn = {
  output: unknown
  speaker: string
  agent: string
  client: string
  channelId: string
}

export class InputDestructureComponent extends ThothComponent<InputReturn> {
  nodeTaskMap: Record<number, ThothTask> = {}

  constructor() {
    // Name of the component
    super('Input Destructure')

    this.task = {
      outputs: {
        output: 'output',
        speaker: 'output',
        agent: 'output',
        client: 'output',
        channelId: 'output',
        trigger: 'option',
      },
      init: (task = {} as Task, node: ThothNode) => {
        this.nodeTaskMap[node.id] = task
      },
    }

    this.category = 'Agents'
    this.info = info
    this.display = true
  }

  builder(node: ThothNode) {
    // module components need to have a socket key.
    // todo add this somewhere automated? Maybe wrap the modules builder in the plugin
    node.data.socketKey = node?.data?.socketKey || uuidv4()

    const inp = new Rete.Input('input', 'Input', anySocket)
    const dataInput = new Rete.Input('trigger', 'Trigger', triggerSocket, true)
    const out = new Rete.Output('output', 'output', stringSocket)
    const speaker = new Rete.Output('speaker', 'speaker', stringSocket)
    const agent = new Rete.Output('agent', 'agent', stringSocket)
    const client = new Rete.Output('client', 'client', stringSocket)
    const channelId = new Rete.Output('channelId', 'channelId', stringSocket)
    const dataOutput = new Rete.Output('trigger', 'Trigger', triggerSocket)

    return node
      .addInput(dataInput)
      .addInput(inp)
      .addOutput(speaker)
      .addOutput(agent)
      .addOutput(client)
      .addOutput(channelId)
      .addOutput(out)
      .addOutput(dataOutput)
  }

  worker(_node: NodeData, inputs: ThothWorkerInputs) {
    console.log('input is', inputs)

    const input = inputs.input != null ? inputs.input[0] : inputs

    // If there are outputs, we are running as a module input and we use that value
    return {
      output: (input as any).Input ?? input,
      speaker: 'Speaker',
      agent: (input as any).Agent ?? 'Agent',
      client: (input as any).Client ?? 'Client',
      channelId: (input as any).ChannelID ?? '0',
    }
  }
}
