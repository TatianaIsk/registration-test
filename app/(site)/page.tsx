'use client';
import { useState } from 'react';

import MainBlock from '@/components/features/MainBlock';
import PasswordBlock from '@/components/features/PasswordBlock';
import EmailBlock from '@/components/features/EmailBlock';
import Button from '@/components/ui/Button';

import s from './MainPage.module.scss';

const MainPage = () => {
  const [lastModified, setLastModified] = useState<Date | null>(null);

  return (
    <div className={s.container}>
      <MainBlock />
      <PasswordBlock />
      <EmailBlock />
      <div className={s.submitForm}>
        <Button className={s.button} type='submit' onClick={() => setLastModified(new Date())}>
          Изменить
        </Button>
        {!!lastModified && <p className={s.text}>последние изменения {lastModified.toLocaleString()}</p>}
      </div>
    </div>
  );
};

export default MainPage;
