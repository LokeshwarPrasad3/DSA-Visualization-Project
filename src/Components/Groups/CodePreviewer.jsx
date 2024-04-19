import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Import the dracula style

const CodePreviewer = ({ codeString }) => {
  
  const customStyle = {
    ...dracula,
    maxHeight: "100%",
    overflowY: "auto",
  };


  return (
    <SyntaxHighlighter language="cpp" style={customStyle}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodePreviewer;
