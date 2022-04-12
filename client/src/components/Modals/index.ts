import ExampleModal from './ExampleModal'
import InfoModal from './InfoModal'
import DeployModal from './DeployModal'
import EditSpellModal from './EditSpellModal'
import SaveAsModal from './SaveAsModal'
import DocumentAddModal from './DocumentAddModal'

const modals = {
  example: ExampleModal,
  infoModal: InfoModal,
  deployModal: DeployModal,
  editSpellModal: EditSpellModal,
  saveAsModal: SaveAsModal,
  documentAddModal: DocumentAddModal,
}

export const getModals = () => {
  return modals
}
