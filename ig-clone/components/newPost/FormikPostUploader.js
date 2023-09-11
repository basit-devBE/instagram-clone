import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik' // Use 'Formik' instead of 'formik'
import { Button, Divider } from 'react-native-elements'

const PLACEHOLDER_IMG = 'https://img.icons8.com/?size=256&id=11561&format=png'
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(200, 'Caption has reached the character limit')
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

    return (
        <Formik // Use 'Formik' here
            initialValues={{ caption: '', imageUrl: '' }} // Use 'placeholder' instead of 'PLACEHOLDER_IMG'
            onSubmit={(values) => console.log(values)} // Use 'onSubmit' instead of 'onsubmit'
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) =>
            <>
            <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                <Image 
                source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}} 
                style={{width:100, height: 100, }}/>
                <View style={{ flex: 1,marginLeft: 12 }}>             
                      <TextInput style={{ fontSize: 20 }}
               placeholder='Write a caption...'
             placeholderTextColor='gray'
             multiline={true}
             onChangeText={handleChange( 'caption' )}
             onBlur={handleBlur( 'caption')}
             value={values.caption}
             />
             </View>

             
            </View>
            <View>
                <Divider width={0.2} orientation='vertical' />
            <TextInput 
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style={{ fontSize: 20}}
             placeholder='Enter Image Url' placeholderTextColor={'gray'}
             onChangeText={handleChange( 'imageUrl' )}
             onBlur={handleBlur( 'imageUrl' )}
             value={values.imageUrl}
             />
             {errors.imageUrl && (
                <Text style={{ fontSize:10, color: 'red'}}>
                    {errors.imageUrl}
                </Text>
             )}

             <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
             </View>
             
            </>
            }
        </Formik>
    )
}

export default FormikPostUploader
