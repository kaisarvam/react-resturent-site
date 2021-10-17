import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const LimitedTimeTab = () => {
    return (
        
        <div className="col-md-8 col-12 ">
            
        <div className="mt-2 pt-4">

        <h1 className="mt-3 fw-bold">Limited Time Offers</h1>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
<Tab eventKey="Laptops" title="Laptops">
<p>Lorem ipsum dolor sit amet consectetur . Perferendis quia ipsa a sequi error odio dolore quibusdam incidunt hic eius. </p>
</Tab>
<Tab eventKey="Desktops" title="Desktops" >
<p>Lorem ipsum dolor sit amet consectetur .  a sequi error odio dolore quibusdam incidunt hic eius. </p>
</Tab>
<Tab eventKey="Mobiles" title="Mobiles">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia ipsa a sequi error odio dolore quibusdam incidunt hic eius. </p>
</Tab>
<Tab eventKey="Accessories " title="Accessories" >
<p>Lorem ipsum dolor sit amet consectetur Perferendis quia ipsa a sequi error odio dolore quibusdam incidunt hic eius. </p>
</Tab>
<Tab eventKey="Headphones" title="Headphones" >
<p>Lorem ipsum dolor sit amet consectetur . Perferendis quia ipsa a sequi error odio dolore quibusdam incidunt hic eius. </p>
</Tab>
</Tabs>
</div>
    </div>
    );
};

export default LimitedTimeTab;