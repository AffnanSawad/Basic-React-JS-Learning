import AddedBookmark from "../addedBookmark/AddedBookmark";

const AddBookMarks = ({addbookmarks,readingTime}) => {
    return (
        <div className="w-1/3">
         
         <div>
            <h3 className="text-xl font-bold text-red-600"> Reading Time : {readingTime} </h3>
         </div>


           <h1 className="text-2xl font-extrabold">Added Books :{addbookmarks.length}  </h1> 

        {
            addbookmarks.map(addedBookmark => <AddedBookmark
            
            addedBookmark={addedBookmark}
             
            ></AddedBookmark>)
        }
        

        </div>
    );
};

export default AddBookMarks;