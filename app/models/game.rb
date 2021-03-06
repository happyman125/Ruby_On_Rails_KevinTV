# == Schema Information
#
# Table name: games
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_one_attached :photo

    # has_one_attached :background

    has_many :streams,
        foreign_key: :game_id,
        class_name: :Stream

    has_many :streamers,
        through: :streams,
        source: :streamer

    has_many :videos,
        foreign_key: :game_id,
        class_name: :Video

end

# HTML VIDEO TAG
# Just edit the default video
