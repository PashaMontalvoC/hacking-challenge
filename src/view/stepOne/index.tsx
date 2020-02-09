import * as React from 'react';
import { Banner } from './banner/components/Banner';
import { PersonForm } from './form/components/PersonForm';
import './styled.scss';

export const StepOne: React.FC = () => (
    <div className="stepOne">
        <Banner />
        <PersonForm />
    </div>
);