import React, { Component } from 'react'

let _id = 0
const generateId = () => `simplepostmd-editor-${++_id}`

class MDField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyChange: false
    }
  }

  componentWillMount() {
    if (this.props.id) {
      this.id = this.props.id
    } else {
      this.id = generateId()
    }
  }

  componentDidMount() {
    this.createEditor()
    this.addEvents()
    this.addExtraKeys()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.keyChange && (nextProps.value !== this.simplemde.value())) {
      this.simplemde.value(nextProps.value)
    }

    this.setState({
      keyChange: false
    })
  }

  componentWillUnmount() {
    this.removeEvents()
  }

  createEditor() {
    const SimpleMDE = require('simplemde')
    const initialOptions = {
      element: document.getElementById(this.id),
      initialValue: this.props.value
    }

    const allOptions = Object.assign({}, initialOptions, this.props.options)
    this.simplemde = new SimpleMDE(allOptions)
  }

  eventWrapper() {
    this.setState({
      keyChange: true
    })
    this.props.onChange(this.simplemde.value())
  }

  removeEvents() {
    this.editorEl.removeEventListener('keyup', this.eventWrapper)
    this.editorToolbarEl && this.editorToolbarEl.removeEventListener('click', this.eventWrapper)
  }

  addEvents() {
    const wrapperId = `${this.id}-wrapper`
    const wrapperEl = document.getElementById(`${wrapperId}`)

    this.editorEl = wrapperEl.getElementsByClassName('CodeMirror')[0]
    this.editorToolbarEl = wrapperEl.getElementsByClassName('editor-toolbar')[0]

    this.editorEl.addEventListener('keyup', this.eventWrapper)
    this.editorToolbarEl && this.editorToolbarEl.addEventListener('click', this.eventWrapper)
  }

  addExtraKeys() {
    // https://codemirror.net/doc/manual.html#option_extraKeys
    if (this.props.extraKeys) {
      this.simplemde.codemirror.setOption(
        'extraKeys',
        this.props.extraKeys
      )
    }
  }

  render() {
    const textarea = React.createElement('textarea', { id: this.id })
    return React.createElement('div', {
      id: `${this.id}-wrapper`,
      className: this.props.className
    }, textarea)
  }
}


const AreaField = ({ input, autoFocus, label, placeholder }) =>
  <MDField
    {...input}
    options={{
      autofocus: autoFocus
    }}
    placeholder={placeholder || label}
  />


export default AreaField
