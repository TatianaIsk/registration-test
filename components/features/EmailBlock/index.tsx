import Label from '@/components/ui/Label';

import s from './EmailBlock.module.scss';
import Input from '@/components/ui/Input';

const EmailBlock = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.input}>
        <Label>Номер телефона</Label>
        <Input />
      </div>
      <div className={s.input}>
        <Label>Электронная почта</Label>
        <Input />
      </div>
      <div className={s.inputCheckboxForm}>
        <Label>Я согласен</Label>
        <Input type='checkbox' className={s.inputCheckbox}/>
				<p className={s.text}>принимать актуальную информацию на емейл</p>
      </div>
    </div>
  );
};

export default EmailBlock;
