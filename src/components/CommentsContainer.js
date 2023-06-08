
import {BsPersonCircle} from "react-icons/bs"
const CommentData = [
  {
    name: "shree",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
  {
    name: "shree",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "shree",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
          {
            name: "shree",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            replies: [
              {
                name: "shree",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "shree",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "shree",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
          {
            name: "shree",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            replies: [],
          },
         
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div>
     
      <div className="p-2 pr-5">
        <p className="flex items-center font-medium"> <BsPersonCircle />{name} </p>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({comments}) => {
    return (
      <div>
        {comments.map((cmt, index) => {
            return (
                <div>
                <Comment key= {index}  data={cmt} />
                <div className="pl-5 border border-l-black ml-5">
                    <CommentList comments={cmt.replies} />
                    </div>
                </div>
            )
        })}
      </div>
    )
}

const CommentsContainer = () => {
  return (
    <div className=" row-span-2">
      <div>
        <h2>Comments : </h2>
      </div>
      <div>
      <CommentList comments={CommentData} />
      </div>
    </div>
  );
};
export default CommentsContainer;
