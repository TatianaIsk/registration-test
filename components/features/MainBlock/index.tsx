import Title from '@/components/ui/Title';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';

import s from './MainBlock.module.scss';

const MainBlock = () => (
  <div className={s.wrapper}>
    <Title name='Человек' />
    <div className={s.input}>
      <Label required>Имя</Label>
      <Input placeholder='Введите имя' />
    </div>
    <div className={s.input}>
      <Label required>Фамилия</Label>
      <Input placeholder='Введите фамилию' />
    </div>
  </div>
);

export default MainBlock;
