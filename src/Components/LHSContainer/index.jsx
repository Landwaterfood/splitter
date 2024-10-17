import PaleBlueCounter from "../PaleBlueCounter";
import Textbox from "../Textbox";
import DollarDisplay from "../DollarDisplay";

import TipButton from "../TipButton";

function LHSContainer() {
    return (
        <>
            <div className = "w-100 ">
                <div className= " flex items-center rounded-sm bg-white w-2/3 ">
                    <div>
                        <Textbox/>
                        <DollarDisplay/>
                    </div>
                    <div>
                        <Textbox/>
                        <PaleBlueCounter/>
                        <TipButton percent={"5"}/>
                        <TipButton percent={"10"}/>
                        <TipButton percent={"15"}/>
                        <TipButton percent={"20"}/>
                        <TipButton percent={"25"}/>
                        <TipButton percent={"50"}/>
                        <Textbox/>
                        <PaleBlueCounter/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LHSContainer