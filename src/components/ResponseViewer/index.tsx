import { ComponentProps } from "react";
import ReactJson from "react-json-view";

interface ResponseViewerProps extends ComponentProps<typeof ReactJson> {}

const ResponseViewer: React.FC<ResponseViewerProps> = ({ src, ...props }) => {
  return <ReactJson src={src} {...props} theme="harmonic" />;
};

export default ResponseViewer;
