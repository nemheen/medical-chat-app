import React from "react";
import { Avatar, useChatContext } from "stream-chat-react"; 
//Avatar is a component that displays a user's profile picture
//useChatContext is a hook that provides access to the chat context

const TeamChannelPreview = ({ channel, type }) => {
    const { channel: activeChannel, client } = useChatContext();
    //channel is the channel object that is being previewed
    //activeChannel is the channel that is currently being viewed
    const ChannelPreview = () => (
        <p className="channel-preview__item">
            # {channel?.data?.name || channel?.data?.id}
        </p>
    );

    const DirectPreview = () => {
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
        //members is an array of the members of the channel
        //client.userID is the ID of the current user
        //object.values() returns an array of a given object's own enumerable property values

        return (
            <div className="channel-preview__item single">
                <Avatar 
                    image={members[0]?.user?.image}
                    name={members[0]?.user?.fullName}
                    size={24}
                />
                <p>{members[0]?.user?.fullName}</p>
            </div>
        );
    };

    return (
        <div className={
           channel?.id === activeChannel?.id 
                ? 'channel-preview__wrapper__selected'
                : 'channel-preview__wrapper'
        }
        onClick={() => {
            console.log(channel);
        }}
        >
            {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
        </div>
    );
}   

export default TeamChannelPreview;


