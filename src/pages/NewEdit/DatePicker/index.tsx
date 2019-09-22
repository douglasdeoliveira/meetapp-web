import { useField } from '@rocketseat/unform';
import { addDays, parseISO, setHours, setMinutes } from 'date-fns';
import pt from 'date-fns/locale/pt';
import React, { useEffect, useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  name: string;
  initialDate: string | undefined;
};

export default function DatePicker({ name, initialDate }: Props) {
  const ref: any = useRef();

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [selected, setSelected] = useState<Date | null>(defaultValue);

  useEffect(() => {
    setSelected(initialDate ? parseISO(initialDate) : null);
  }, [initialDate]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.selected',
        clearValue: (pickerRef: any) => {
          pickerRef.clear();
        },
      });
    }
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        ref={ref}
        locale={pt}
        name={fieldName}
        selected={selected}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        minTime={setHours(setMinutes(new Date(), 0), 8)}
        maxTime={setHours(setMinutes(new Date(), 0), 22)}
        minDate={addDays(new Date(), 1)}
        dateFormat="dd 'de' MMMM', às' HH'h'mm'm'"
        onChange={date => setSelected(date)}
        placeholderText="Data do meetup"
        popperPlacement="top-start"
        autoComplete="off"
      />
      {error && <span>{error}</span>}
    </>
  );
}
