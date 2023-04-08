import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { LoadingButton } from '@material-ui/lab';
import {
  Box,
  Grid,
  TextField,
  Typography,
  FormHelperText
} from '@material-ui/core';
//
import { QuillEditor } from '../editor';

// ----------------------------------------------------------------------

Contact.propTypes = {
  formik: PropTypes.object.isRequired,
  onOpenPreview: PropTypes.func
};

export default function Contact() {
  const NewBlogSchema = Yup.object().shape({
    company_name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required')
  });
  const formik = useFormik({
    initialValues: {
      company_name: '',
      description: ''
    },
    validationSchema: NewBlogSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        console.log(values);
        resetForm();

        setSubmitting(false);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors({ afterSubmit: error.code });
      }
    }
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    getFieldProps
  } = formik;
  console.log(errors, touched, values);
  return (
    <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Typography
            gutterBottom
            variant="subtitle2"
            sx={{ color: 'text.secondary' }}
          >
            Lets talk how to make real your idea !
          </Typography>
          <TextField
            fullWidth
            label="Company name"
            {...getFieldProps('company_name')}
            error={Boolean(touched.company_name && errors.company_name)}
            helperText={touched.company_name && errors.company_name}
            sx={{ mb: 3 }}
          />

          <Typography
            gutterBottom
            variant="subtitle2"
            sx={{ color: 'text.secondary' }}
          >
            Describe your project and book a meeting with one of our consultants
          </Typography>

          <QuillEditor
            id="post-content"
            value={values.description}
            onChange={(val) => setFieldValue('description', val)}
            error={Boolean(touched.description && errors.description)}
          />
          <FormHelperText error sx={{ px: 2 }}>
            {touched.content && errors.content}
          </FormHelperText>

          <Box sx={{ mb: 3 }} />

          <FormHelperText error sx={{ px: 2 }}>
            {touched.cover && errors.cover}
          </FormHelperText>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <LoadingButton
              type="submit"
              disabled={!values.company_name || !values.description}
              variant="contained"
              pending={isSubmitting}
            >
              Post
            </LoadingButton>
          </Box>
        </Form>
      </FormikProvider>
    </Grid>
  );
}
