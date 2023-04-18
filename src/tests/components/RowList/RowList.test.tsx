import { screen, render } from "@testing-library/react";

import RowList from "../../../components/RowList/RowList";
import { FaHtml5 } from "react-icons/fa";

describe("RowList", () => {
  const techList = [
    {
      row: [
        {
          name: "HTML5",
          icon: <FaHtml5 />,
        },
        {
          name: "React.js",
          icon: <FaHtml5 />,
        },
      ],
    },
  ];
  test("renders components", () => {
    render(
      <RowList
        name={<RowList.Name header="Test" />}
        content={
          <RowList.Content>
            {techList.map((row, index) => (
              <RowList.Row
                key={index}
                elements={row.row.map((element, index) => (
                  <RowList.Element key={index} icon={element.icon} name={element.name} />
                ))}
              />
            ))}
          </RowList.Content>
        }
      />
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
