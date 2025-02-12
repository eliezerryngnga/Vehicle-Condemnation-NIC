// import React from 'react';
// import { 
//   FormControl
// } from '@chakra-ui/react';

// import { Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';

// const TestForm = () => {
//   return (
//     <Formik
//       initialValues={{ username: '' }}
//       validationSchema={Yup.object({ username: Yup.string().required('Required') })}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <Field name="username">
//             {({ field, meta }) => (
//               <FormControl isInvalid={meta.touched && meta.error}>
//                 <FormLabel htmlFor="username">Username</FormLabel>
//                 <Input {...field} id="username" />
//                 <FormErrorMessage>{meta.error}</FormErrorMessage>
//               </FormControl>
//             )}
//           </Field>
//           <Button type="submit" isLoading={isSubmitting}>
//             Submit
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default TestForm;
