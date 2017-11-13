import {
  FETCH_POST_CONTRACT,
  FAILURE_POST_CONTRACT,
  RECEIVE_ADDRESS_CONTRACT,
  REQUEST_CONTRACT,
  FAILURE_CONTRACT,
  RECEIVE_CONTRACT,
  REQUEST_CONTRACTS,
  FAILURE_CONTRACTS,
  RECEIVE_CONTRACTS,
  RAISE_DISPUTE_CONTRACT,
  ADD_EVIDENCE_CONTRACT
} from './actions'

export function fetchPostContract (state = false, action) {
  switch (action.type) {
    case FETCH_POST_CONTRACT:
      return action.isFetching
    default:
      return state
  }
}

export function failurePostContract (state = false, action) {
  switch (action.type) {
    case FAILURE_POST_CONTRACT:
      return action.hasErrored
    default:
      return state
  }
}

export function address (state = 0x0, action) {
  switch (action.type) {
    case RECEIVE_ADDRESS_CONTRACT:
      return action.address
    default:
      return state
  }
}

export function requestContract (state = false, action) {
  switch (action.type) {
    case REQUEST_CONTRACT:
      return action.isFetching
    default:
      return state
  }
}

export function failureContract (state = false, action) {
  switch (action.type) {
    case FAILURE_CONTRACT:
      return action.hasErrored
    default:
      return state
  }
}

export function contract (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CONTRACT:
      return action.data
    default:
      return state
  }
}

export function requestContracts (state = false, action) {
  switch (action.type) {
    case REQUEST_CONTRACTS:
      return action.isFetching
    default:
      return state
  }
}

export function failureContracts (state = false, action) {
  switch (action.type) {
    case FAILURE_CONTRACTS:
      return action.hasErrored
    default:
      return state
  }
}

export function contracts (state = [], action) {
  switch (action.type) {
    case RECEIVE_CONTRACTS:
      return action.data
    default:
      return state
  }
}

export function raiseDisputeContract (state = 0x0, action) {
  switch (action.type) {
    case RAISE_DISPUTE_CONTRACT:
      return action.raiseDisputeContractTx
    default:
      return state
  }
}

export function addEvidenceContract (state = 0x0, action) {
  switch (action.type) {
    case ADD_EVIDENCE_CONTRACT:
      return action.addEvicenceContractTx
    default:
      return state
  }
}
