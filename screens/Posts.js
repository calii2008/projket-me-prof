import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Stylesheet } from "react-native";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchingData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonResponse = await response.json();
            setPosts(jsonResponse);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchingData();
    }, []);

    return (
        <View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>title: {item.title}</Text>
                            <Text>Body: {item.body}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
}

export default Posts;