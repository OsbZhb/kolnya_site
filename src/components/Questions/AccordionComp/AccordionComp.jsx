import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import styles from "./styles.module.scss";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

const AccordionComp = () => {
  return (
    <div className={styles.app}>
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <div className="accordionComp__one">
        <Accordion transition transitionTimeout={250}>
          <AccordionItem header="Могу ли я вернуть деньги за курс?" initialEntered>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionItem>

          <AccordionItem header="Будет ли обучение на реальных людях?">
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
            erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
          </AccordionItem>

          <AccordionItem header="Why do we use it?">
            Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
            Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionComp;