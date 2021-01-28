const Editor = props => (
  <textarea
    id='editor'
    className="textarea"
    onChange={props.onChange}
    type='text'
    value={props.markdown}
  />
);

export default Editor;
