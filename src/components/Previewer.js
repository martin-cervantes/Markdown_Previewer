const Previewer = props => (
  <div
    id="preview"
    className="textarea"
    dangerouslySetInnerHTML={{
      __html: window.marked(props.markdown)
    }}
  />
);

export default Previewer;
