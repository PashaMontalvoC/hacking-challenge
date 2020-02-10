export const required = (value: string) => {
  return value ? undefined : "Campo requerido";
};

export const minLength = (number: number, message?: string) => (value: string) => {
  const errorMessage = message ? message : `Ingrese mínimo ${number} caracteres`;
  return value.length >= number ? null : errorMessage;
};

export const mobileNumberValid = (val:string) => {
  return /^([9]{1})+([0-9]{8})$/.test(val)? undefined : "Celular no válido"
};

export const birthDate = (value: string): string => {

  const error = 'Formato no válido, ingrese DD/MM/YYYY';

  if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(value)) {
      return error
  }

  const arrayMonths = [
    {
      id: 1,
      days: 31
    },
    {
      id: 2,
      days: 28
    },
    {
      id: 3,
      days: 31
    },
    {
      id: 4,
      days: 30
    },
    {
      id: 5,
      days: 31
    },
    {
      id: 6,
      days: 30
    },
    {
      id: 7,
      days: 31
    },
    {
      id: 8,
      days: 31
    },
    {
      id: 9,
      days: 30
    },
    {
      id: 10,
      days: 31
    },
    {
      id: 11,
      days: 30
    },
    {
      id: 12,
      days: 31
    }
  ];

  const date = value.split('/');
  const day = parseInt(date[0]);
  const month = parseInt(date[1]);
  const year = parseInt(date[2]);
  const yearNow = (new Date).getFullYear();
  const maxYearValid = yearNow - 20;
  const minYearValid = yearNow - 50;
  const dateFilter = arrayMonths.filter(date => date.id === month && (1 <= day && day <= date.days))[0]

  if (!dateFilter) {
    return 'Ingrese fecha válida';
  }

  if ((year < minYearValid) || (year > maxYearValid)) {
    return 'Edad fuera de rango';
  }

  return null;
};
