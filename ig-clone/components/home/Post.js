import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons =[
    {
        name: 'Like',
        imageUrl:
        'https://img.icons8.com/?size=256&id=87&format=png',
        likedImageUrl:
        'https://img.icons8.com/?size=256&id=zkTZNXGR64dz&format=png'
    },
    {
        name: 'Comment' ,
        imageUrl:
        'https://img.icons8.com/?size=256&id=143&format=png'
    },
    {
        name: 'Share',
        imageUrl:
        'https://img.icons8.com/?size=256&id=2837&format=png'
    },
    {
        name: 'Save',
        imageUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/012/528/048/small/simple-save-icon-isolated-on-white-background-bookmark-symbol-modern-simple-for-web-site-or-mobile-app-vector.jpg',
    }
]


const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
        <Divider width={1} orientation='vertical'/>
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10, }}> 
       <PostFooter />
       <Likes post={post} />
       <Caption post={post} />
       <CommentSection post={post} />
       <Comments post={post} />
      </View>  
    </View>
  )
}

const PostHeader =({ post }) => (
    <View 
    style ={{flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center'
        }}> 
        <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
          <Image source={{ uri: post.profile_picture }}  style={styles.story} />
          <Text style ={{ color: 'black', marginLeft: 5,
        fontVariant: '700' }}>{post.user}</Text>
        </View>
        <Text style={{ color: 'black', fontWeight: '500'}}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View 
      style ={{
        width: '100%',
        height: 450,
      }}>
    <Image source={{ uri: post.imageUrl }}
    style={{ height: '100%', resizeMode: 'cover' }}
    />
    </View>
)


const PostFooter = () => (
    <View style={{ flexDirection: 'row'}}>
       <View style={styles.leftFooterIconsContainer}>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View> 

    <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
    </View>
)

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
      <Text style={{ fontWeight: '600' }}>{post.Likes.toLocaleString('en')} Likes
      </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5}}>
        <Text style={{ color: 'black' }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
             <Text> {post.caption} </Text>
            </Text>
            </View>
    
)

const CommentSection = ({ post }) => (
<View style={{ marginTop: 5}}>
    {!!post.comments.length && (
       <Text style={{ color: 'gray' }}>
       View {post.comments.length > 1? 'all' : ''} {post.comments.length}{' '}
       {post.comments.length > 1 ? 'comments': 'comment'}
    </Text>
    )}
    </View>
)

const Comments = ({ post }) => (
    <>
    {post.comments.map((comment, index) =>
    <View key={ index } style={{ flexDirection: 'row', marginTop: 5 }}>
        <Text style={{ color: 'black' }}>
        <Text style={{ fontWeight: '600'}}>{comment.user}</Text>{' '}
        {comment.comment}
        </Text>
    </View>)}
    </>
)

const styles = StyleSheet.create({
    story: {
        width: 28,
        height: 28,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },

   footerIcon: {
    width: 22,
    height: 22,
    justifyContent: 'space-between'
   },

   leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '15%',
    justifyContent: 'space-between',
    

}
})


export default Post