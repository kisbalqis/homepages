// icons pict
import dashboard from "../../assets/icon/dashoard.png";
import inspection from "../../assets/icon/inspection.png";
import maintenance from "../../assets/icon/maintenance.png";
import equipments from "../../assets/icon/equipments.png";
import fault_list from "../../assets/icon/fault_list.png";
import tire_inventory from "../../assets/icon/tire_inventory.png";
import parts_iventory from "../../assets/icon/parts_iventory.png";
import tools_management from "../../assets/icon/tools_management.png";
import log_book from "../../assets/icon/log_book.png";
import master_data from "../../assets/icon/master_data.png";
import reports from "../../assets/icon/reports.png";
// icons pict end
// icons
import { VscListFlat } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
// icons end

export default function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      icon: <img src={dashboard} />,
      submenu: <IoIosArrowForward size={20} />,
    },
    {
      name: "Inspection",
      icon: <img src={inspection} />,
      submenu: <IoIosArrowForward size={20} />,
    },
    { name: "Maintenance", icon: <img src={maintenance} /> },
    { name: "Equipments", icon: <img src={equipments} /> },
    { name: "Fault List", icon: <img src={fault_list} /> },
    { name: "Tire Inventory", icon: <img src={tire_inventory} /> },
    { name: "Parts Inventory", icon: <img src={parts_iventory} /> },
    { name: "Tools Management", icon: <img src={tools_management} /> },
    { name: "Log Book", icon: <img src={log_book} /> },
    { name: "Master Data", icon: <img src={master_data} /> },
    { name: "Reports", icon: <img src={reports} /> },
  ];
  return (
    <div className="border-2 w-34 h-full bg-gray-200">
      <div>
        {menu.map((val, index) => {
          return (
            <div key={index} className="border-2 border-gray-300">
              <div className="flex justify-between items-center hover:bg-light-green hover:text-white">
                <div className="flex gap-1 h-10 items-center justify-center">
                  <div className="flex items-center justify-center h-full pl-2 w-14">
                    {val.icon}
                  </div>
                  <div className="h-full px-4 border-l-2 border-gray-300">
                    {val.name}
                  </div>
                </div>
                <div>{val.submenu}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
