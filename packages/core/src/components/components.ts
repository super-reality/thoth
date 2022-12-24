import { ThothComponent } from '../../types'
import { AgentTextCompletion } from './agents/AgentTextCompletion'
import { CacheManagerDelete } from './agents/CacheManagerDelete'
import { CacheManagerGet } from './agents/CacheManagerGet'
import { CacheManagerSet } from './agents/CacheManagerSet'
import { CustomTextCompletion } from './agents/CustomTextCompletion'
import { EventRecall } from './agents/EventRecall'
import { EventStore } from './agents/EventStore'
import { InputDestructureComponent } from './agents/InputDestructure'
import { InputRestructureComponent } from './agents/InputRestructure'
import { Request } from './agents/Request'
import { CheckBalanceForERC20 } from './ethereum/CheckBalanceForERC20'
import { CheckEthBalance } from './ethereum/CheckEthBalance'
import { CheckForRecentTransactionsFromWallet } from './ethereum/CheckForRecentTransactionsFromWallet'
import { GetRecentTransactions } from './ethereum/GetRecentTransactions'
import { InputComponent } from './io/Input'
import { Output } from './io/Output'
import { SpellComponent } from './io/Spell'
import { TriggerIn } from './io/TriggerIn'
import { TriggerOut } from './io/TriggerOut'
import { BooleanGate } from './logic/BooleanGate'
import { Coallesce } from './logic/Coallesce'
import { Code } from './logic/Code'
import { ForEach } from './logic/ForEach'
import { IsNullOrUndefined } from './logic/IsNullOrUndefined'
import { IsQuery } from './logic/IsQuery'
import { IsVariableTrue } from './logic/IsVariableTrue'
import { LogicalOperator } from './logic/LogicalOperator'
import { OrGate } from './logic/OrGate'
import { SwitchGate } from './logic/SwitchGate'
import { WaitForAll } from './logic/WaitForAll'
import { ExclusiveGate } from './logic/Exclusive Gate'
import { WhileLoop } from './logic/WhileLoop'
import { Classifier } from './ml/Classifier'
import { SentenceMatcher } from './ml/SentenceMatcher'
import { TextToSpeech } from './ml/TextToSpeech'
import { DocumentDelete } from './search/DocumentDelete'
import { DocumentEdit } from './search/DocumentEdit'
import { DocumentGet } from './search/DocumentGet'
import { DocumentSet } from './search/DocumentSet'
import { DocumentSetMass } from './search/DocumentSetMass'
import { DocumentStoreGet } from './search/DocumentStoreGet'
import { GetWikipediaSummary } from './search/GetWikipediaSummary'
import { QueryGoogle } from './search/QueryGoogle'
import { RSSGet } from './search/RSSGet'
import { Search } from './search/Search'
import { VectorSearch } from './search/VectorSearch'
import { WeaviateWikipedia } from './search/WeaviateWikipedia'
import { StateRead } from './state/StateRead'
import { StateWrite } from './state/StateWrite'
import { ComplexStringMatcher } from './strings/ComplexStringMatcher'
import { JoinListComponent } from './strings/JoinList'
import { ProfanityFilter } from './strings/ProfanityFilter'
import { RandomStringFromList } from './strings/RandomStringFromList'
import { StringAdder } from './strings/StringAdder'
import { StringCombiner } from './strings/StringCombiner'
import { StringEvaluator } from './strings/StringEvaluator'
import { StringProcessor } from './strings/StringProcessor'
import { ImageGeneration } from './ml/ImageGeneration'
import { Alert } from './utility/AlertMessage'
import { Cast } from './utility/Cast'
import { Destructure } from './utility/Destructure'
import { Echo } from './utility/Echo'
import { InputsToJSON } from './utility/InputsToJSON'
import { InRange } from './utility/InRange'
import { Log } from './utility/Log'
import { Merge } from './utility/Merge'
import { VariableReplacer } from './utility/VariableReplacer'
import { ArrayVariable } from './variable/ArrayVariable'
import { BooleanVariable } from './variable/BooleanVariable'
import { FewshotVariable } from './variable/FewshotVariable'
import { NumberVariable } from './variable/NumberVariable'
import { StringVariable } from './variable/StringVariable'

// Here we load up all components of the builder into our editor for usage.
// We might be able to programatically generate components from enki

// NOTE: PLEASE KEEP THESE IN ALPHABETICAL ORDER
// todo some kind of custom build parser perhaps to take car of keeping these in alphabetical order

export const components = {
  alert: () => new Alert(),
  booleanGate: () => new BooleanGate(),
  cast: () => new Cast(),
  coallesce: () => new Coallesce(),
  inRange: () => new InRange(),
  code: () => new Code(),
  sentenceMatcher: () => new SentenceMatcher(),
  destructure: () => new Destructure(),
  complexStringMatcher: () => new ComplexStringMatcher(),
  echo: () => new Echo(),
  variableReplacer: () => new VariableReplacer(),
  textToSpeech: () => new TextToSpeech(),
  agentTextCompletion: () => new AgentTextCompletion(),
  customTextCompletion: () => new CustomTextCompletion(),
  Classifier: () => new Classifier(),
  isNullOrUndefined: () => new IsNullOrUndefined(),
  isQuery: () => new IsQuery(),
  isVariableTrue: () => new IsVariableTrue(),
  conversationStore: () => new EventStore(),
  conversationRecall: () => new EventRecall(),
  request: () => new Request(),
  search: () => new Search(),
  vectorSearch: () => new VectorSearch(),
  documentGet: () => new DocumentGet(),
  documentEdit: () => new DocumentEdit(),
  documentDelete: () => new DocumentDelete(),
  documentSet: () => new DocumentSet(),
  documentSetMass: () => new DocumentSetMass(),
  documentStoreGet: () => new DocumentStoreGet(),
  rssGet: () => new RSSGet(),
  forEach: () => new ForEach(),
  whileLoop: () => new WhileLoop(),
  cacheManagerGet: () => new CacheManagerGet(),
  cacheManagerDelete: () => new CacheManagerDelete(),
  cacheManagerSet: () => new CacheManagerSet(),
  stringEvaluator: () => new StringEvaluator(),
  stringCombiner: () => new StringCombiner(),
  randomStringFromList: () => new RandomStringFromList(),
  stringVariable: () => new StringVariable(),
  fewshotVariable: () => new FewshotVariable(),
  stringAdder: () => new StringAdder(),
  profanityFilter: () => new ProfanityFilter(),
  numberVariable: () => new NumberVariable(),
  booleanVariable: () => new BooleanVariable(),
  arrayVariable: () => new ArrayVariable(),
  logicalOperator: () => new LogicalOperator(),
  inputComponent: () => new InputComponent(),
  inputDestructureComponent: () => new InputDestructureComponent(),
  inputRestructureComponent: () => new InputRestructureComponent(),
  inputsToJson: () => new InputsToJSON(),
  joinListComponent: () => new JoinListComponent(),
  moduleComponent: () => new SpellComponent(),
  output: () => new Output(),
  stateWrite: () => new StateWrite(),
  stateRead: () => new StateRead(),
  stringProcessor: () => new StringProcessor(),
  switchGate: () => new SwitchGate(),
  triggerIn: () => new TriggerIn(),
  triggerOut: () => new TriggerOut(),
  waitForAll: () => new WaitForAll(),
  exclusiveGate: () => new ExclusiveGate(),
  checkEthBalance: () => new CheckEthBalance(),
  checkBalanceForERC20: () => new CheckBalanceForERC20(),
  getRecentTransactions: () => new GetRecentTransactions(),
  checkForRecentTransactionsFromWallet: () =>
    new CheckForRecentTransactionsFromWallet(),
  weaviateWikipedia: () => new WeaviateWikipedia(),
  getWikipediaSummary: () => new GetWikipediaSummary(),
  merge: () => new Merge(),
  orGate: () => new OrGate(),
  log: () => new Log(),
  queryGoogle: () => new QueryGoogle(),
  ImageGeneration: () => new ImageGeneration(),
}

function compare(a: ThothComponent<unknown>, b: ThothComponent<unknown>) {
  if ((a.displayName || a.name) < (b.displayName || b.name)) {
    return -1
  }
  if ((a.displayName || a.name) > (b.displayName || b.name)) {
    return 1
  }
  return 0
}

export const getComponents = () => {
  const sortedComponents = Object.keys(components)
    .sort()
    .reduce(function (acc, key: keyof typeof components) {
      acc[key] = components[key]
      return acc
    }, {} as Record<string, any>)

  return Object.values(sortedComponents)
    .map(component => component())
    .sort(compare)
}
