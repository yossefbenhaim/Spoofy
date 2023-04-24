import { gql } from '@apollo/client';

const DELETE_USER = gql`
    mutation MyMutation2($id: UUID!) {
        deleteUserById(input: { id: $id }) {
            deletedUserId
        }
    }
`;

export default DELETE_USER;
