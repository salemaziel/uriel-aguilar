import React from 'react'
import { openPopupWidget } from 'react-calendly';
import Button from 'react-bootstrap/Button'


//const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
//  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
const CalendlyButton = ({ url }) => {
    const onClick = () => openPopupWidget({ url:"https://calendly.com/salemaziel/30-min" });
  return <Button onClick={onClick} /*className={calendlystyle.NavBook}* / className="blue-btns btn btn-primary"*/ className="profile-card__button button--blue" url={url} >Get in Touch</Button>
}

export default CalendlyButton