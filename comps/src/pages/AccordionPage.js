import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Where are these placed?",
      content:
        "They are placed in the DOM wherever you want them to be rendered",
    },
    {
      id: 2,
      label: "How can I change the default theme?",
      content: "You can override the default theme values in the ThemeProvider",
    },
    {
      id: 3,
      label: "How to access the ref of the element?",
      content: "Use the ref prop",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
