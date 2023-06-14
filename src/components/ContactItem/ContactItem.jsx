import { Item, ContactDetails, Button } from "./ContactItem.styled"
export const ContactItem = ({ name, number, id, onDeleteBtnClick }) => {
    return (
        <Item>
            <ContactDetails>{name}: {number}</ContactDetails>
            <Button onClick={()=>onDeleteBtnClick(id)} type="button">Delete</Button>
        </Item>
    )
}