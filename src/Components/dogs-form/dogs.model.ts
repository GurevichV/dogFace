import BasicInput from "../basicInput/BasicInput";
import ImageInput from "../image-input/ImageInput";


export interface GetDogsModelConfig {
    values: any;
    touched: { [key: string]: boolean };
    errors: any;
    handleChange: (e: React.ChangeEvent<{ value: any }>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
}


export function getDogsFormModel(config: GetDogsModelConfig) {

    const { values, errors, touched, handleBlur, handleChange } = config;

    return [
        {
            component: BasicInput,
            id: 'dogName',
            label: "Dog's name",
            values: values.dogName,
            handleChange, handleBlur,
            type: 'text',
            touched: touched.dogName,
            errors: errors.dogName
        },
        {
            component: BasicInput,
            id: 'dogBreed',
            label: "Breed",
            values: values.dogBreed,
            handleChange, handleBlur,
            type: 'text',
            touched: touched.dogBreed,
            errors: errors.dogBreed
        },
        {
            component: BasicInput,
            id: 'dogAge',
            label: "Age",
            values: values.dogAge,
            handleChange, handleBlur,
            type: 'text',
            touched: touched.dogAge,
            errors: errors.dogAge
        },
        {
            component: BasicInput,
            id: 'dogSize',
            label: "Doge size",
            values: values.dogSize,
            handleChange, handleBlur,
            type: 'text',
            touched: touched.dogSize,
            errors: errors.dogSize
        }
    ]
}