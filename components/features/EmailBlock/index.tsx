import MaskedInput from 'react-input-mask';

import Input from '@/components/ui/Input';

import s from './EmailBlock.module.scss';

const EmailBlock = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.input}>
        <MaskedInput
          mask="+7 (999) 999-99-99"
          alwaysShowMask
          className={s.inputPhone}
        />
      </div>
      <div className={s.input}>
        <Input placeholder='Введите email'/>
      </div>
      <div className={s.inputCheckboxForm}>
        <Input type='checkbox' className={s.inputCheckbox} />
        <p className={s.text}>принимать актуальную информацию на емейл</p>
      </div>
    </div>
  );
};

export default EmailBlock;
