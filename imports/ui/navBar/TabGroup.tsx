import * as React from 'react';
import {SlTab, SlTabGroup, SlTabPanel} from "@shoelace-style/shoelace/dist/react";

export default function TabGroup() {
    return (
            <SlTabGroup style={{
                width: "1200px",
                marginInline: "auto"
            }}>
                    <SlTab slot="nav" panel="general">
                        General
                    </SlTab>
                    <SlTab slot="nav" panel="custom">
                        Custom
                    </SlTab>
                    <SlTab slot="nav" panel="advanced">
                        Advanced
                    </SlTab>

                    <SlTabPanel name="general">This is the general tab panel.</SlTabPanel>
                    <SlTabPanel name="custom">This is the custom tab panel.</SlTabPanel>
                    <SlTabPanel name="advanced">This is the advanced tab panel.</SlTabPanel>
            </SlTabGroup>
    );
}