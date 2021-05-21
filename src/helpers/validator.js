import { userModel } from '../models/user'

function _validateField (fieldName, fieldValue, model) {
  if (!model) {
    return false
  }
  // console.log('---')
  // console.log('model.obj', model.obj)
  const options = model.obj[fieldName]
  if (!options) {
    return true
  }

  // console.log('options', fieldName, options, fieldValue)
  let hasErrors = false
  if (options.required && !fieldValue) {
    hasErrors = true
  }

  return !hasErrors
}

export const validate = (data, as) => {
  if (!data) {
    console.warn('[validate] no data provided to validate.')
  }

  let model
  switch (as) {
    case 'user':
      model = userModel
      break
  }
  if (!model) {
    console.warn('[validate] no model found to validate data')
  }

  let hasErrors = false
  Object.entries(data).forEach(pair => {
    if (!_validateField(pair[0], pair[1], model)) {
      console.log('error in', pair[0], pair[1], model.obj[pair[0]])
      hasErrors = true
    }
  })
  console.log('[validate] data', data, 'as', as, 'res:', !hasErrors)
  return !hasErrors
}

export const isAllFieldsEmpty = (data, exclude = []) => {
  console.log('[isAllFieldsEmpty] data', data)
  let isFilled = false
  Object.entries(data).every(pair => {
    if (exclude.includes(pair[0])) {
      return true
    }
    console.log('value', pair[1])
    if (pair[1]) {
      isFilled = true
      return false
    }
    return true
  })
  console.log('isFilled', isFilled)
  return !isFilled
}
