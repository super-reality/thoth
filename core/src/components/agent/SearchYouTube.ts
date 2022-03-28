// import axios from 'axios'
import Rete from 'rete'

/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-console */
/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  NodeData,
  ThothNode,
  ThothWorkerInputs,
  ThothWorkerOutputs,
} from '../../../types'
// import { InputControl } from '../../dataControls/InputControl'
import { EngineContext } from '../../engine'
import { anySocket, triggerSocket } from '../../sockets'
import { ThothComponent } from '../../thoth-component'

const info = 'Search Youtube'
// TODO: Update this
const serverUrl =
  process.env.REACT_APP_API_ROOT_URL ??
  process.env.API_URL ??
  'http://localhost:8001'

type WorkerReturn = {
  name: string,
  search: string
}

export class SearchYoutube extends ThothComponent<Promise<WorkerReturn>> {
  constructor() {
    super('Search Youtube')

    this.task = {
      outputs: {
        output: 'output',
        trigger: 'option',
        name: 'name',
        search: ''
      },
    }

    this.category = ''
    this.display = true
    this.info = info
  }

  builder(node: ThothNode) {
    const dataInput = new Rete.Input(
      'Trigger In',
      'Input search',
      triggerSocket,
      true
    )
    const dataInputString = new Rete.Input('Input', 'Input String', anySocket)
    const videoOutput = new Rete.Output('Trigger Out', 'results[]', triggerSocket)
    const dataOutputString = new Rete.Output('Trigger', 'Trigger Out', anySocket)

    return node
      .addInput(dataInput)
      .addInput(dataInputString)
      .addOutput(videoOutput)
      .addOutput(dataOutputString)
  }

  async worker(
    node: NodeData,
    inputs: ThothWorkerInputs,
    outputs: ThothWorkerOutputs,
    { silent, thoth }: { silent: boolean; thoth: EngineContext }
  ) {
    console.log('Handling ', node?.data)
    console.log('serverUrl is', serverUrl)

    //const res = await axios.get(`${serverUrl}/agent_data`)

    // node.display(res && res.data && res.data.agent)
    // const agent = res.data.agent
    return {
      name: 'testestest',
    //   agent: 'test',
      search: 'test2',
    }
  }
}
