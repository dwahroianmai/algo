import AlgList from "./alg-list";

function Algorithms({ show, refProp, setClicked }) {
  if (show) {
    return (
      <>
        <div
          ref={refProp}
          className="self-center border-2 bg-blue-100 border-blue-400 sm:p-20 p-11 flex flex-col sm:gap-5 gap-3 relative"
        >
          <button
            onClick={() => setClicked(false)}
            className=" absolute top-0 right-0 m-3 text-blue-400 sm:text-2xl text-lg active:shadow-none hover:shadow-none"
          >
            X
          </button>
          <AlgList name="Insertion Sort" />
          <AlgList name="Selection Sort" />
          <AlgList name="Bubble Sort" />
          <AlgList name="Quick Sort" />
          <AlgList name="Merge Sort" />
          <AlgList name="Heap Sort" />
          <AlgList name="Bucket Sort" />
          <AlgList name="Randomized-Select" />
        </div>
      </>
    );
  }
  return null;
}

export default Algorithms;
