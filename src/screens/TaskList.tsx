import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Dimensions } from 'react-native';
import todayImage from "../../assets/imgs/today.jpg"; 
import moment from 'moment';
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles';
import Task from '../components/Task';

interface TaskListProps{
}

const TaskList:React.FC<TaskListProps> = ({}) => {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
    return (
        <View style={styles.container}>
            <ImageBackground source={todayImage} style={styles.background}>
                <View style={styles.titleBar}>
                    
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subTitle}>{today}</Text>
                </View>
            </ImageBackground>
            <View style={styles.taskList}>
                <Task description='Primeira task' estimateAt={new Date()} doneAt={new Date()} />
                <Task description='Segunda task' estimateAt={new Date()} doneAt={null} />
                <Task description='Terceira task' estimateAt={new Date()} doneAt={new Date()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    background: {
        flex: 3,
        width: Dimensions.get("window").width,
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: "flex-end",
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.today,
        marginBottom: 20,
        marginLeft: 20,
        fontSize: 50,
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.today,
        marginBottom: 20,
        marginLeft: 20,
        fontSize: 20,
    }
    
})
export default TaskList;