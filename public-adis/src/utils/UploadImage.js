import { useDropzone } from "react-dropzone";
function Basic({ components, ...other }) {
  const { getRootProps, getInputProps } = useDropzone({
    ...other,
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{components}</ul>
      </aside>
    </section>
  );
}
export default Basic;
