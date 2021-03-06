import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
import Api from '/api';

class Actions {
	static setComments(params) {

		AppDispatcher.dispatch({
			actionType: Constants.SET_COMMENTS,
			comments: params
		});

	};

	static upvoteComment(comment) {
		Api.put_w_promise(`/restaurants/1/comments/${comment.id}/upvote`).then(function(response) { 
			return JSON.parse(response)
		}).then( function(response) { 
			AppDispatcher.dispatch({
				actionType: Constants.UPVOTE_COMMENT,
				comment: response
			});
		}).catch( function(error) { 
			console.error("Error!", error)
		})
	}


	static addComment(params) {
		Api.post_w_promise('/restaurants/1/comments.json', {
			comment: params
		}).then(function(response) { 
			return JSON.parse(response)
		}).then( function(response) { 
			AppDispatcher.dispatch({
				actionType: Constants.ADD_COMMENT,
				comment: response
			});
		}).catch( function(error) { 
			console.error("Error!", error)
		})
	}
}
export default Actions