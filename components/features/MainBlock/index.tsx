import cities from '@/json/cities.json';

import Title from '@/components/ui/Title';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

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
    <div className={s.input}>
      <Label required>Ваш город</Label>
      <Select options={cities} />
    </div>
  </div>
);

export default MainBlock;
