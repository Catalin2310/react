import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Messaging = (props) => {
  return (
<div class={s.content}>
    <div className={s.messages}>
      <div className={s.message}>
    {props.message}
      </div>
    </div>
</div>
  );
}

const UsersD = (props) => {
  return (
<div class={s.content}>
  <div className={s.dialog_items}>
      <div className={s.dialoguser}><NavLink to="/dialogs/1" activeClassName={s.active}>{props.name}</NavLink> </div>
  </div>
</div>
  );

}

const Dialogs = (props) => {
  return (
<div class={s.content}>
  <h2>Dialogs</h2>
  <div className={s.dialogs}>
<UsersD name="Catalin"/>
<Messaging message="Hi beauty"/>
</div>
</div>

  );

}
export default Dialogs;
