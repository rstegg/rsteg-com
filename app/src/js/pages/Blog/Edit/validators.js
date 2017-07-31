export const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.preview) {
    errors.preview = 'Required'
  }
  if (!values.slug) {
    errors.slug = 'Required'
  }
  if (!values.keywords) {
    errors.keywords = 'Required'
  }
  if (!values.text) {
    errors.text = 'Required'
  }
  return errors
}
