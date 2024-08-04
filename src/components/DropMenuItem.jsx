import { usePost } from "../context/PostProvider";


export default function DropMenuItem({ scrollToSection, dropOpen }) {
  const { descript, neonProduct, howOrder, questionBox, info } = usePost();

  const menuItems = [
    { section: descript, label: "تـوضـیحـات" },
    { section: neonProduct, label: "نـمونـه کـار" },
    { section: howOrder, label: "نـحوه سـفارش" },
    { section: questionBox, label: "سـوالات مـتـداول" },
    { section: info, label: "تـماس بامـا" },
  ];

  return (
    <div
      onMouseEnter={dropOpen}
      className="absolute right-7 top-10 z-40 bg-[#C4D7B2] rounded-lg"
    >
      <div className="flex flex-col divide-y divide-solid py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.section)}
            className="text-center px-3 py-1 hover:bg-[#b4b4b5]"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
