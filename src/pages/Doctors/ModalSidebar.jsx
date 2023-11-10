import { useState } from "react";

const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

const ModalSidebar = () => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-200 p-4">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer py-2 px-4 mb-2 rounded ${activeTab === index ? "bg-blue-500 text-white" : "bg-white"
                            }`}
                        onClick={() => changeTab(index)}
                        style={{
                            position: "relative",
                            overflow: "hidden"
                        }}
                    >
                        {tab}
                        {activeTab === index && (
                            <div
                                style={{
                                    width: "3px",
                                    height: "100%",
                                    backgroundColor: "#3182ce",
                                    position: "absolute",
                                    left: "-3px",
                                    top: "0",
                                    transition: "all 0.3s ease"
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="w-3/4 bg-gray-300 p-4">
                {/* Content for the active tab */}
                {tabs[activeTab]} Content
            </div>
        </div>
    );
};

export default ModalSidebar;
