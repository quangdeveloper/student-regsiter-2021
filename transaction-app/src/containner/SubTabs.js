import nav from "./nav";
import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SubTabs = () =>{

    const [isActive, setIsActive] = useState(true);

    return(
        <>
            <Tabs>
                <TabList>
                    <Tab><a  href="/user" >  Title 1</a></Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default SubTabs


// <div>
// <nav>
// <div className="nav nav-tabs" id="nav-tab" role="tablist">
//     <a className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="/user" ac
// data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
// aria-selected="true">Home
//     </a>
// <a className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" href="/role"
//    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
//    aria-selected="false">Profile
// </a>
// <a className="nav-link active" id="nav-contact-tab" data-bs-toggle="tab" href="/user"
// data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
// aria-selected="false">Contact
//     </a>
// </div>
// </nav>
// </div>
