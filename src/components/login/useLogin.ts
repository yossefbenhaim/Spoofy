import { useQuery } from '@apollo/client';
import { setUsers } from 'redux/slice/users';
import { useDispatch } from 'react-redux';
import User from 'models/interface/user';
import GET_USERS from 'queries/query/users';

const usersQueary = () => {
    const dispatch = useDispatch();

    const parse_users = (userDB: any) => ({
        id: userDB.id,
        firstName: userDB.firstName,
        lastName: userDB.lastName,
    });

    useQuery(GET_USERS, {
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
            const usersData = (data.allUsers.nodes as any[]).map<User>(
                parse_users
            );
            dispatch(setUsers(usersData));
        },
    });
};

export default usersQueary;
