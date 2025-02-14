import usePackages from "../hooks/usePackages";
import Table from "../components/PackageTable";

const Package = () => {
  const { packages, deletePackage, page, totalPages, nextPage, prevPage } = usePackages();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Package List</h1>
      <Table data={packages} deleteItem={deletePackage} />
      <div className="flex justify-between mt-4">
        <button 
          onClick={prevPage} 
          disabled={page === 1} 
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
          Previous
        </button>
        <span className="px-4 py-2">Page {page} of {totalPages}</span>
        <button 
          onClick={nextPage} 
          disabled={page === totalPages} 
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Package;
