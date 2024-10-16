import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);

  const handleResize = () => {
    setWid(window.innerWidth);
  };

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <div className="w-fit m-auto pt-[80px] flex flex-col items-center">
      <Document file={pdf} className="pointer-events-none">
        <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>

      <a href={pdf} target="_blank" download="Tejash's Resume">
        <button
          className="my-6 px-5 py-2 bg-[#431f47] text-[#e7e7e7] rounded-md border-none transition-all duration-500 hover:bg-[#e7e7e7] hover:text-[#431f47]"
          type="button"
        >
          <h3 className="flex items-center justify-center">
            <BsDownload />
            &nbsp; Download CV
          </h3>
        </button>
      </a>
    </div>
  );
};

export default Resume;
