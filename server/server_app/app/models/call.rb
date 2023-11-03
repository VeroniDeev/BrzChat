class Call < ApplicationRecord
  belongs_to :friendship
  belongs_to :user, class_name: 'User', foreign_key: 'who_call'
end
