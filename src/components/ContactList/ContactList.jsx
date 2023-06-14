import { nanoid } from "nanoid";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactsList } from "./ContactList.styled";
export const ContactList = ({ contacts, onDeleteBtnClick}) => {
    return (
        <ContactsList>
            {contacts.map(({ name, number, id }) => <ContactItem
                key={nanoid()}
                name={name}
                number={number}
                id={id}
                onDeleteBtnClick={onDeleteBtnClick}>
                </ContactItem>)}
      </ContactsList>)
}