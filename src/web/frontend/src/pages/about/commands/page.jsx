 export default function CommandPage() {
   return (
    <div className="p-5">
           <div className = "px-[30px] py-[20px] bg-white shadow-xl rounded-[10px] mb-[30px]">
            {/* Section 2: Checkio Commands */}
                <h2 className="text-[#081627] text-[30px] font-semibold mb-4">
                    Checkio Commands
                </h2>
                <ul className="list-disc pl-8 text-[#081627] text-[18px]">
                    <li><b>checkio config : </b>used to configure the necessary settings</li>
                    <li><b>checkio create : </b>used to create new testcases</li>
                    <li><b>checkio about : </b>used to display the features and commands of checkio</li>
                    <li><b>checkio serve : </b>used to access the web</li>
                    <li><b>checkio user create : </b>used to create a new Faculty account</li>
                    <li><b>checkio user delete : </b>used to delete an existing Faculty account</li>
                    <li><b>checkio run : </b>used to run the program submitted by students</li>
                    <li><b>checkio analyze : </b>used to analyze the program submitted by students</li>
                    <li><b>checkio submit : </b>used to submit the program by students</li>
                </ul>
            </div>
      </div>

   )
 }